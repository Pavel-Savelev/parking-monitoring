// hooks/useWebSocket.ts
import { useEffect, useRef, useState, useCallback } from 'react';

interface WebSocketOptions {
  onMessage?: (data: any) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onError?: (error: Event) => void;
  reconnectAttempts?: number;
  reconnectInterval?: number;
}

export function useWebSocket(url: string, options: WebSocketOptions = {}) {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<any>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectCountRef = useRef(0);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();

  const {
    onMessage,
    onOpen,
    onClose,
    onError,
    reconnectAttempts = 5,
    reconnectInterval = 3000
  } = options;

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        reconnectCountRef.current = 0;
        onOpen?.();
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          setLastMessage(data);
          onMessage?.(data);
        } catch {
          setLastMessage(event.data);
          onMessage?.(event.data);
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        onClose?.();

        // Пробуем переподключиться
        if (reconnectCountRef.current < reconnectAttempts) {
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectCountRef.current++;
            connect();
          }, reconnectInterval);
        }
      };

      ws.onerror = (error) => {
        onError?.(error);
      };
    } catch (error) {
      console.error('WebSocket connection error:', error);
    }
  }, [
    url,
    onMessage,
    onOpen,
    onClose,
    onError,
    reconnectAttempts,
    reconnectInterval
  ]);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  }, []);

  const sendMessage = useCallback(
    (data: any) => {
      if (wsRef.current && isConnected) {
        const message = typeof data === 'string' ? data : JSON.stringify(data);
        wsRef.current.send(message);
      } else {
        console.error('WebSocket не подключен');
      }
    },
    [isConnected]
  );

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return {
    isConnected,
    lastMessage,
    sendMessage,
    disconnect,
    connect
  };
}

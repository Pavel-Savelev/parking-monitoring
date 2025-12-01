import { useTheme } from '../../../app/providers/ThemeProvider';

export const useThemeImage = (
  lightImage: string,
  darkImage: string
): string => {
  const { theme } = useTheme();

  // Определяем текущую тему (если auto - проверяем системную)
  const isDark =
    theme === 'dark' ||
    (theme === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return isDark ? darkImage : lightImage;
};

import { useLocation } from 'react-router';
import { BASE_PATH } from '~/lib/constants';

export function getNavClass(to: string): string {
  const location = useLocation();
  const currentPath = location.pathname.replace(BASE_PATH, '') || '/';
  const targetPath = to.replace(BASE_PATH, '') || '/';

  const isActive = currentPath === targetPath;

  return `rounded-md px-3 py-2 text-sm font-medium ${
    isActive
      ? 'bg-gray-900 text-white'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
  }`;
}

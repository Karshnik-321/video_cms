import {
    HomeIcon,
    ListBulletIcon,
} from '@heroicons/react/24/outline'

export const dashboardRoutes = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Video List', href: '/videolist', icon: ListBulletIcon, current: true }
]
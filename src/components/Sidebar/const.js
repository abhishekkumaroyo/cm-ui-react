import { BookingsIcon, DashboardIcon, PropertyIcon, InventoryIcon, PricingIcon, RatePlansIcon, ChannelsIcon } from '../Icons/icons.js';

export const items = [
    {
        id: 1,
        name: 'Dashboard',
        url: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        id: 2,
        name: 'Bookings',
        url: '/bookings',
        icon: <BookingsIcon />
    },
    {
        id: 3,
        name: 'Property',
        url: '/property',
        icon: <PropertyIcon />
    },
    {
        id: 8,
        name: 'Promotions',
        url: '/promotions',
        icon: <ChannelsIcon />
    },
    {
        id: 4,
        name: 'Inventory',
        url: '/inventory',
        icon: <InventoryIcon />
    },
    {
        id: 5,
        name: 'Rate Plans',
        url: '/rateplans',
        icon: <RatePlansIcon />
    },
    {
        id: 6,
        name: 'Pricing',
        url: '/pricing',
        icon: <PricingIcon />
    },
    {
        id: 7,
        name: 'Channels',
        url: '/channels',
        icon: <ChannelsIcon />
    }
];

export default items;

import * as React from 'react';
import { type Theme, SxProps } from '@mui/material';
import { type AccountProps } from '../Account';
export interface SidebarFooterProps {
    mini: boolean;
}
export interface DashboardLayoutSlotProps {
    toolbarActions?: {};
    toolbarAccount?: AccountProps;
    sidebarFooter?: SidebarFooterProps;
}
export interface DashboardLayoutSlots {
    /**
     * The toolbar actions component used in the layout header.
     * @default ToolbarActions
     */
    toolbarActions?: React.JSXElementConstructor<{}>;
    /**
     * The toolbar account component used in the layout header.
     * @default Account
     */
    toolbarAccount?: React.JSXElementConstructor<AccountProps>;
    /**
     * Optional footer component used in the layout sidebar.
     * @default null
     */
    sidebarFooter?: React.JSXElementConstructor<SidebarFooterProps>;
}
export interface DashboardLayoutProps {
    /**
     * The content of the dashboard.
     */
    children: React.ReactNode;
    /**
     * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
     * @default false
     */
    disableCollapsibleSidebar?: boolean;
    /**
     * Whether the sidebar should start collapsed in desktop size screens.
     * @default false
     */
    defaultSidebarCollapsed?: boolean;
    /**
     * Whether the navigation bar and menu icon should be hidden
     * @default false
     */
    hideNavigation?: boolean;
    /**
     * The components used for each slot inside.
     * @default {}
     */
    slots?: DashboardLayoutSlots;
    /**
     * The props used for each slot inside.
     * @default {}
     */
    slotProps?: DashboardLayoutSlotProps;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
}
/**
 *
 * Demos:
 *
 * - [Dashboard Layout](https://mui.com/toolpad/core/react-dashboard-layout/)
 *
 * API:
 *
 * - [DashboardLayout API](https://mui.com/toolpad/core/api/dashboard-layout)
 */
declare function DashboardLayout(props: DashboardLayoutProps): React.JSX.Element;
declare namespace DashboardLayout {
    var propTypes: any;
}
export { DashboardLayout };

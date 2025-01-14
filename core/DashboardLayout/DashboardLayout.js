'use client';

var _MenuOpenIcon, _MenuIcon, _Toolbar, _ToolpadLogo, _ThemeSwitcher, _Toolbar2;
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from "../shared/Link.js";
import { BrandingContext, NavigationContext, WindowContext } from "../shared/context.js";
import { Account } from "../Account/index.js";
import { useApplicationTitle } from "../shared/branding.js";
import { DashboardSidebarSubNavigation } from "./DashboardSidebarSubNavigation.js";
import { ToolbarActions } from "./ToolbarActions.js";
import { ThemeSwitcher } from "./ThemeSwitcher.js";
import { ToolpadLogo } from "./ToolpadLogo.js";
import { getDrawerSxTransitionMixin, getDrawerWidthTransitionMixin } from "./utils.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AppBar = styled(MuiAppBar)(({
  theme
}) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1
}));
const LogoContainer = styled('div')({
  position: 'relative',
  height: 40,
  '& img': {
    maxHeight: 40
  }
});
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
function DashboardLayout(props) {
  const {
    children,
    disableCollapsibleSidebar = false,
    defaultSidebarCollapsed = false,
    hideNavigation = false,
    slots,
    slotProps,
    sx
  } = props;
  const theme = useTheme();
  const branding = React.useContext(BrandingContext);
  const navigation = React.useContext(NavigationContext);
  const appWindow = React.useContext(WindowContext);
  const applicationTitle = useApplicationTitle();
  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] = React.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = React.useState(false);
  const isUnderMdViewport = useMediaQuery(theme.breakpoints.down('md'), appWindow && {
    matchMedia: appWindow.matchMedia
  });
  const isOverSmViewport = useMediaQuery(theme.breakpoints.up('sm'), appWindow && {
    matchMedia: appWindow.matchMedia
  });
  const isNavigationExpanded = isUnderMdViewport ? isMobileNavigationExpanded : isDesktopNavigationExpanded;
  const setIsNavigationExpanded = React.useCallback(newExpanded => {
    if (isUnderMdViewport) {
      setIsMobileNavigationExpanded(newExpanded);
    } else {
      setIsDesktopNavigationExpanded(newExpanded);
    }
  }, [isUnderMdViewport]);
  const [isNavigationFullyExpanded, setIsNavigationFullyExpanded] = React.useState(isNavigationExpanded);
  React.useEffect(() => {
    if (isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyExpanded(true);
      }, theme.transitions.duration.enteringScreen);
      return () => clearTimeout(drawerWidthTransitionTimeout);
    }
    setIsNavigationFullyExpanded(false);
    return () => {};
  }, [isNavigationExpanded, theme]);
  const selectedItemIdRef = React.useRef('');
  const handleSetNavigationExpanded = React.useCallback(newExpanded => () => {
    setIsNavigationExpanded(newExpanded);
  }, [setIsNavigationExpanded]);
  const toggleNavigationExpanded = React.useCallback(() => {
    setIsNavigationExpanded(!isNavigationExpanded);
  }, [isNavigationExpanded, setIsNavigationExpanded]);
  const handleNavigationLinkClick = React.useCallback(() => {
    selectedItemIdRef.current = '';
    setIsMobileNavigationExpanded(false);
  }, [setIsMobileNavigationExpanded]);

  // If useEffect was used, the reset would also happen on the client render after SSR which we don't need
  React.useMemo(() => {
    if (navigation) {
      selectedItemIdRef.current = '';
    }
  }, [navigation]);
  const isDesktopMini = !disableCollapsibleSidebar && !isDesktopNavigationExpanded;
  const isMobileMini = !disableCollapsibleSidebar && !isMobileNavigationExpanded;
  const getMenuIcon = React.useCallback(isExpanded => {
    const expandMenuActionText = 'Expand';
    const collapseMenuActionText = 'Collapse';
    return /*#__PURE__*/_jsx(Tooltip, {
      title: `${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`,
      enterDelay: 1000,
      children: /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx(IconButton, {
          "aria-label": `${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`,
          onClick: toggleNavigationExpanded,
          children: isExpanded ? _MenuOpenIcon || (_MenuOpenIcon = /*#__PURE__*/_jsx(MenuOpenIcon, {})) : _MenuIcon || (_MenuIcon = /*#__PURE__*/_jsx(MenuIcon, {}))
        })
      })
    });
  }, [toggleNavigationExpanded]);
  const hasDrawerTransitions = isOverSmViewport && (disableCollapsibleSidebar || !isUnderMdViewport);
  const ToolbarActionsSlot = slots?.toolbarActions ?? ToolbarActions;
  const ToolbarAccountSlot = slots?.toolbarAccount ?? Account;
  const SidebarFooterSlot = slots?.sidebarFooter ?? null;
  const getDrawerContent = React.useCallback((isMini, viewport) => /*#__PURE__*/_jsxs(React.Fragment, {
    children: [_Toolbar || (_Toolbar = /*#__PURE__*/_jsx(Toolbar, {})), /*#__PURE__*/_jsxs(Box, {
      component: "nav",
      "aria-label": `${viewport.charAt(0).toUpperCase()}${viewport.slice(1)}`,
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'auto',
        pt: navigation[0]?.kind === 'header' && !isMini ? 0 : 2,
        ...(hasDrawerTransitions ? getDrawerSxTransitionMixin(isNavigationFullyExpanded, 'padding') : {})
      },
      children: [/*#__PURE__*/_jsx(DashboardSidebarSubNavigation, {
        subNavigation: navigation,
        onLinkClick: handleNavigationLinkClick,
        isMini: isMini,
        isFullyExpanded: isNavigationFullyExpanded,
        hasDrawerTransitions: hasDrawerTransitions,
        selectedItemId: selectedItemIdRef.current
      }), SidebarFooterSlot ? /*#__PURE__*/_jsx(SidebarFooterSlot, {
        mini: isMini,
        ...slotProps?.sidebarFooter
      }) : null]
    })]
  }), [SidebarFooterSlot, handleNavigationLinkClick, hasDrawerTransitions, isNavigationFullyExpanded, navigation, slotProps?.sidebarFooter]);
  const getDrawerSharedSx = React.useCallback((isMini, isTemporary) => {
    const drawerWidth = isMini ? 64 : 320;
    return {
      width: drawerWidth,
      flexShrink: 0,
      ...getDrawerWidthTransitionMixin(isNavigationExpanded),
      ...(isTemporary ? {
        position: 'absolute'
      } : {}),
      [`& .MuiDrawer-paper`]: {
        position: 'absolute',
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundImage: 'none',
        ...getDrawerWidthTransitionMixin(isNavigationExpanded)
      }
    };
  }, [isNavigationExpanded]);
  const layoutRef = React.useRef(null);
  return /*#__PURE__*/_jsxs(Box, {
    ref: layoutRef,
    sx: {
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
      ...sx
    },
    children: [/*#__PURE__*/_jsx(AppBar, {
      color: "inherit",
      position: "absolute",
      children: /*#__PURE__*/_jsxs(Toolbar, {
        sx: {
          backgroundColor: 'inherit',
          mx: {
            xs: -0.75,
            sm: -1.5
          }
        },
        children: [!hideNavigation ? /*#__PURE__*/_jsxs(React.Fragment, {
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              mr: {
                sm: disableCollapsibleSidebar ? 0 : 1
              },
              display: {
                md: 'none'
              }
            },
            children: getMenuIcon(isMobileNavigationExpanded)
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              display: {
                xs: 'none',
                md: disableCollapsibleSidebar ? 'none' : 'block'
              },
              mr: disableCollapsibleSidebar ? 0 : 1
            },
            children: getMenuIcon(isDesktopNavigationExpanded)
          })]
        }) : null, /*#__PURE__*/_jsx(Box, {
          sx: {
            position: {
              xs: 'absolute',
              md: 'static'
            },
            left: {
              xs: '50%',
              md: 'auto'
            },
            transform: {
              xs: 'translateX(-50%)',
              md: 'none'
            }
          },
          children: /*#__PURE__*/_jsx(Link, {
            href: "/",
            style: {
              color: 'inherit',
              textDecoration: 'none'
            },
            children: /*#__PURE__*/_jsxs(Stack, {
              direction: "row",
              alignItems: "center",
              children: [/*#__PURE__*/_jsx(LogoContainer, {
                children: branding?.logo ?? (_ToolpadLogo || (_ToolpadLogo = /*#__PURE__*/_jsx(ToolpadLogo, {
                  size: 40
                })))
              }), /*#__PURE__*/_jsx(Typography, {
                variant: "h6",
                sx: {
                  color: (theme.vars ?? theme).palette.primary.main,
                  fontWeight: '700',
                  ml: 0.5,
                  whiteSpace: 'nowrap'
                },
                children: applicationTitle
              })]
            })
          })
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            flexGrow: 1
          }
        }), /*#__PURE__*/_jsxs(Stack, {
          direction: "row",
          spacing: 1,
          children: [/*#__PURE__*/_jsx(ToolbarActionsSlot, {
            ...slotProps?.toolbarActions
          }), _ThemeSwitcher || (_ThemeSwitcher = /*#__PURE__*/_jsx(ThemeSwitcher, {})), /*#__PURE__*/_jsx(ToolbarAccountSlot, {
            ...slotProps?.toolbarAccount
          })]
        })]
      })
    }), !hideNavigation ? /*#__PURE__*/_jsxs(React.Fragment, {
      children: [/*#__PURE__*/_jsx(Drawer, {
        container: layoutRef.current,
        variant: "temporary",
        open: isMobileNavigationExpanded,
        onClose: handleSetNavigationExpanded(false),
        ModalProps: {
          keepMounted: true // Better open performance on mobile.
        },
        sx: {
          display: {
            xs: 'block',
            sm: disableCollapsibleSidebar ? 'block' : 'none',
            md: 'none'
          },
          ...getDrawerSharedSx(false, true)
        },
        children: getDrawerContent(false, 'phone')
      }), /*#__PURE__*/_jsx(Drawer, {
        variant: "permanent",
        sx: {
          display: {
            xs: 'none',
            sm: disableCollapsibleSidebar ? 'none' : 'block',
            md: 'none'
          },
          ...getDrawerSharedSx(isMobileMini, false)
        },
        children: getDrawerContent(isMobileMini, 'tablet')
      }), /*#__PURE__*/_jsx(Drawer, {
        variant: "permanent",
        sx: {
          display: {
            xs: 'none',
            md: 'block'
          },
          ...getDrawerSharedSx(isDesktopMini, false)
        },
        children: getDrawerContent(isDesktopMini, 'desktop')
      })]
    }) : null, /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      },
      children: [_Toolbar2 || (_Toolbar2 = /*#__PURE__*/_jsx(Toolbar, {})), /*#__PURE__*/_jsx(Box, {
        component: "main",
        sx: {
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'auto'
        },
        children: children
      })]
    })]
  });
}
process.env.NODE_ENV !== "production" ? DashboardLayout.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the dashboard.
   */
  children: PropTypes.node,
  /**
   * Whether the sidebar should start collapsed in desktop size screens.
   * @default false
   */
  defaultSidebarCollapsed: PropTypes.bool,
  /**
   * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
   * @default false
   */
  disableCollapsibleSidebar: PropTypes.bool,
  /**
   * Whether the navigation bar and menu icon should be hidden
   * @default false
   */
  hideNavigation: PropTypes.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    sidebarFooter: PropTypes.shape({
      mini: PropTypes.bool.isRequired
    }),
    toolbarAccount: PropTypes.shape({
      localeText: PropTypes.shape({
        iconButtonAriaLabel: PropTypes.string,
        signInLabel: PropTypes.string,
        signOutLabel: PropTypes.string
      }),
      slotProps: PropTypes.shape({
        popover: PropTypes.object,
        popoverContent: PropTypes.object,
        preview: PropTypes.object,
        signInButton: PropTypes.object,
        signOutButton: PropTypes.object
      }),
      slots: PropTypes.shape({
        popover: PropTypes.elementType,
        popoverContent: PropTypes.elementType,
        preview: PropTypes.elementType,
        signInButton: PropTypes.elementType,
        signOutButton: PropTypes.elementType
      })
    }),
    toolbarActions: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    sidebarFooter: PropTypes.elementType,
    toolbarAccount: PropTypes.elementType,
    toolbarActions: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export { DashboardLayout };
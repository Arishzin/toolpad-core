"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardLayout = DashboardLayout;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Toolbar3 = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _MenuOpen = _interopRequireDefault(require("@mui/icons-material/MenuOpen"));
var _Link = require("../shared/Link");
var _context = require("../shared/context");
var _Account = require("../Account");
var _branding = require("../shared/branding");
var _DashboardSidebarSubNavigation = require("./DashboardSidebarSubNavigation");
var _ToolbarActions = require("./ToolbarActions");
var _ThemeSwitcher2 = require("./ThemeSwitcher");
var _ToolpadLogo2 = require("./ToolpadLogo");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _MenuOpenIcon, _MenuIcon, _Toolbar, _ToolpadLogo, _ThemeSwitcher, _Toolbar2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AppBar = (0, _material.styled)(_AppBar.default)(({
  theme
}) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1
}));
const LogoContainer = (0, _material.styled)('div')({
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
  const theme = (0, _material.useTheme)();
  const branding = React.useContext(_context.BrandingContext);
  const navigation = React.useContext(_context.NavigationContext);
  const appWindow = React.useContext(_context.WindowContext);
  const applicationTitle = (0, _branding.useApplicationTitle)();
  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] = React.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = React.useState(false);
  const isUnderMdViewport = (0, _useMediaQuery.default)(theme.breakpoints.down('md'), appWindow && {
    matchMedia: appWindow.matchMedia
  });
  const isOverSmViewport = (0, _useMediaQuery.default)(theme.breakpoints.up('sm'), appWindow && {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
      title: `${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`,
      enterDelay: 1000,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
          "aria-label": `${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`,
          onClick: toggleNavigationExpanded,
          children: isExpanded ? _MenuOpenIcon || (_MenuOpenIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuOpen.default, {})) : _MenuIcon || (_MenuIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu.default, {}))
        })
      })
    });
  }, [toggleNavigationExpanded]);
  const hasDrawerTransitions = isOverSmViewport && (disableCollapsibleSidebar || !isUnderMdViewport);
  const ToolbarActionsSlot = slots?.toolbarActions ?? _ToolbarActions.ToolbarActions;
  const ToolbarAccountSlot = slots?.toolbarAccount ?? _Account.Account;
  const SidebarFooterSlot = slots?.sidebarFooter ?? null;
  const getDrawerContent = React.useCallback((isMini, viewport) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [_Toolbar || (_Toolbar = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toolbar3.default, {})), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      component: "nav",
      "aria-label": `${viewport.charAt(0).toUpperCase()}${viewport.slice(1)}`,
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'auto',
        pt: navigation[0]?.kind === 'header' && !isMini ? 0 : 2,
        ...(hasDrawerTransitions ? (0, _utils.getDrawerSxTransitionMixin)(isNavigationFullyExpanded, 'padding') : {})
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DashboardSidebarSubNavigation.DashboardSidebarSubNavigation, {
        subNavigation: navigation,
        onLinkClick: handleNavigationLinkClick,
        isMini: isMini,
        isFullyExpanded: isNavigationFullyExpanded,
        hasDrawerTransitions: hasDrawerTransitions,
        selectedItemId: selectedItemIdRef.current
      }), SidebarFooterSlot ? /*#__PURE__*/(0, _jsxRuntime.jsx)(SidebarFooterSlot, {
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
      ...(0, _utils.getDrawerWidthTransitionMixin)(isNavigationExpanded),
      ...(isTemporary ? {
        position: 'absolute'
      } : {}),
      [`& .MuiDrawer-paper`]: {
        position: 'absolute',
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundImage: 'none',
        ...(0, _utils.getDrawerWidthTransitionMixin)(isNavigationExpanded)
      }
    };
  }, [isNavigationExpanded]);
  const layoutRef = React.useRef(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    ref: layoutRef,
    sx: {
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
      ...sx
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(AppBar, {
      color: "inherit",
      position: "absolute",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toolbar3.default, {
        sx: {
          backgroundColor: 'inherit',
          mx: {
            xs: -0.75,
            sm: -1.5
          }
        },
        children: [!hideNavigation ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              mr: {
                sm: disableCollapsibleSidebar ? 0 : 1
              },
              display: {
                md: 'none'
              }
            },
            children: getMenuIcon(isMobileNavigationExpanded)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: {
                xs: 'none',
                md: disableCollapsibleSidebar ? 'none' : 'block'
              },
              mr: disableCollapsibleSidebar ? 0 : 1
            },
            children: getMenuIcon(isDesktopNavigationExpanded)
          })]
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
            href: "/",
            style: {
              color: 'inherit',
              textDecoration: 'none'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
              direction: "row",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LogoContainer, {
                children: branding?.logo ?? (_ToolpadLogo || (_ToolpadLogo = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolpadLogo2.ToolpadLogo, {
                  size: 40
                })))
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            flexGrow: 1
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
          direction: "row",
          spacing: 1,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ToolbarActionsSlot, {
            ...slotProps?.toolbarActions
          }), _ThemeSwitcher || (_ThemeSwitcher = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeSwitcher2.ThemeSwitcher, {})), /*#__PURE__*/(0, _jsxRuntime.jsx)(ToolbarAccountSlot, {
            ...slotProps?.toolbarAccount
          })]
        })]
      })
    }), !hideNavigation ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Drawer.default, {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drawer.default, {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drawer.default, {
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
    }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      },
      children: [_Toolbar2 || (_Toolbar2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toolbar3.default, {})), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
  children: _propTypes.default.node,
  /**
   * Whether the sidebar should start collapsed in desktop size screens.
   * @default false
   */
  defaultSidebarCollapsed: _propTypes.default.bool,
  /**
   * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
   * @default false
   */
  disableCollapsibleSidebar: _propTypes.default.bool,
  /**
   * Whether the navigation bar and menu icon should be hidden
   * @default false
   */
  hideNavigation: _propTypes.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    sidebarFooter: _propTypes.default.shape({
      mini: _propTypes.default.bool.isRequired
    }),
    toolbarAccount: _propTypes.default.shape({
      localeText: _propTypes.default.shape({
        iconButtonAriaLabel: _propTypes.default.string,
        signInLabel: _propTypes.default.string,
        signOutLabel: _propTypes.default.string
      }),
      slotProps: _propTypes.default.shape({
        popover: _propTypes.default.object,
        popoverContent: _propTypes.default.object,
        preview: _propTypes.default.object,
        signInButton: _propTypes.default.object,
        signOutButton: _propTypes.default.object
      }),
      slots: _propTypes.default.shape({
        popover: _propTypes.default.elementType,
        popoverContent: _propTypes.default.elementType,
        preview: _propTypes.default.elementType,
        signInButton: _propTypes.default.elementType,
        signOutButton: _propTypes.default.elementType
      })
    }),
    toolbarActions: _propTypes.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    sidebarFooter: _propTypes.default.elementType,
    toolbarAccount: _propTypes.default.elementType,
    toolbarActions: _propTypes.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
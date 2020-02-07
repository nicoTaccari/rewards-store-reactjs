import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { ProductCard } from "../productCard";
import { Content } from "../../styles/styledGrid";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "../../styles/drawer";
import { UserInfo } from "../userInfo";
import { useSelector } from "react-redux";
import { Loading } from "../../components/loading/index";
import { Filters } from "../../components/filters/index";

import "react-toastify/dist/ReactToastify.css";
import { ProductList } from "../productList";

export const Sidenav = () => {
  const user = useSelector(state => state.user);
  const filters = useSelector(state => state.filters);

  console.log(filters);

  const products = useSelector(state => state.products);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Rewards Store
          </Typography>
          <Filters />
          {/* <div className={classes.grow} /> */}
          {/* <div className={classes.} */}
          <UserInfo user={user} />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" noWrap>
            Historial de Compras
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {user.history ? (
            user.history.map((product, i) => (
              <ProductCard product={product} key={i} isRedeem={true} />
            ))
          ) : (
            <Loading />
          )}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Content>
          <ProductList filters={filters} products={products} />
        </Content>
      </main>
    </div>
  );
};

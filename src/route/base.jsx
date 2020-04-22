import React, {Component} from "react";
import {Route, Switch,  HashRouter} from "react-router-dom";
import PageHome from "../pages/home/home";
// import PageDoc from "../pages/doc/doc";
import PageProvinsi from "../pages/provinsi/provinsi";
import PageKabKot from "../pages/kabupaten_kota/kabupaten-kota";
import PageKecamatan from "../pages/kecamatan/kecamatan";
import PageKelurahan from "../pages/desa_kelurahan/kelurahan";
import {PATH_DIR} from "./path";
class Base extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={PATH_DIR.root} exact component={() => <PageHome/>}/>
                    {/* <Route path={PATH_DIR.doc} exact component={() => <PageDoc/>}/> */}
                    <Route path={PATH_DIR.provinsi} exact component={() => <PageProvinsi/>}/>
                    <Route path={PATH_DIR.kab_kot} exact component={() => <PageKabKot/>}/>
                    <Route path={PATH_DIR.kecamatan} exact component={() => <PageKecamatan/>}/>
                    <Route path={PATH_DIR.des_kel} exact component={() => <PageKelurahan/>}/>
                </Switch>
            </HashRouter>
        )
    }
}
export default Base;
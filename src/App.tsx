import style from './app.module.scss'
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Bonds from "./pages/bonds/Bonds";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className={style.app}>
            <div className={style.app__header}>
                <div className={style.container}>
                    <Header/>
                </div>
            </div>
            <div className={style.app__main}>
                <div className={style.container}>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/bonds" element={<Bonds/>}/>
                    </Routes>
                </div>
            </div>
            <div className={style.app__footer}>
                <div className={style.container}>
                        <Footer/>
                </div>
            </div>
        </div>
    )}

            export default App

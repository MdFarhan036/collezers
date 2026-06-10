import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import { Courses } from "./Page/Courses";
import { About } from "./Page/About";
import { Home } from "./Home/Home";
// import { Mission } from "./Page/Mission";
import { Header } from "./Common/Header";
import { Contact } from "./Page/Contact";
import { Footer } from "./Common/Footer";
import { Lpu } from "../PartnersPage/Lpu";
import { CoursePage } from "../SinglePage/CoursePage/CoursePage";
import { ExplorePrograms } from "./Programs/ExplorePrograms";
import UgCourse from "../SinglePage/UgCourse";
import PgCourse from "../SinglePage/PgCourse";
import DiplomaCourse from "../SinglePage/DiplomaCourse";
import CertificationCourse from "../SinglePage/CertificationCourse";
import { Partnerspage } from "../PartnersPage/Partnerspage";

import { Maharishi } from "../PartnersPage/Maharishi";
import { Manipal } from "../PartnersPage/Manipal";
import { Jain } from "../PartnersPage/Jain";
import { Gla } from "../PartnersPage/Gla";
import { Amity } from "../PartnersPage/Amity";
import { Dypu } from "../PartnersPage/Dypu";
import { Sgvu } from "../PartnersPage/Sgvu";
import { Smu } from "../PartnersPage/Smu";
import { Cu } from "../PartnersPage/Cu";
import { Vgu } from "../PartnersPage/Vgu";
import { Jnu } from "../PartnersPage/Jnu";
import { Jecrc } from "../PartnersPage/Jecrc";
import Specialization from "./Home/Specialization";
import SpecializationPage from "../SinglePage/SpecializationPage";
import { Geeta } from "../PartnersPage/Geeta";
import { Future } from "../PartnersPage/Future";

export default function Pages() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                {/* <Route path="mission" element={<Mission />} /> */}
                <Route path="/exploreprograms" element={<ExplorePrograms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/lpu" element={<Lpu />} />
                <Route path="/manipal" element={<Manipal />} />
                <Route path="/gla" element={<Gla />} />
                <Route path="/maharishi" element={<Maharishi />} />
                <Route path="/jain" element={<Jain />} />
                <Route path="/amity" element={<Amity />} />
                <Route path="/smu" element={<Smu />} />
                <Route path="/dypu" element={<Dypu />} />
                <Route path="/sgvu" element={<Sgvu />} />
                <Route path="/cu" element={<Cu />} />
                <Route path="/vgu" element={<Vgu />} />
                <Route path="/jnu" element={<Jnu />} />
                <Route path="/geeta" element={<Geeta />} />
                <Route path="/future" element={<Future />} />
                <Route path="/jecrc" element={<Jecrc />} />
                <Route path='/ugcourse/:id' element={<UgCourse />} />
                <Route path='/pgcourse/:id' element={<PgCourse />} />
                <Route path='/diplomacourse/:id' element={<DiplomaCourse />} />
                <Route path='/certificationcourse/:id' element={<CertificationCourse />} />
                <Route path='/coursepage/:id' element={<CoursePage />} />
                <Route path='/specialization/:id' element={<SpecializationPage />} />
                {/* <Route path='/collegepage/:id' element={<Collegepage />} /> */}
                <Route path='/partnerspage/:id' element={<Partnerspage />} />

            </Routes>
            <Footer />
        </Router>
    );
}
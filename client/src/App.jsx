import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskListPage from "./pages/TaskListPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import UpdateTaskPage from "./pages/UpdateTaskPage.jsx";
import TaskByIdPage from "./pages/TaskByIdPage.jsx";

const App = () => {
    return (
        <div>
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<TaskListPage/>} />
                   <Route path="/createTask" element={<TaskFormPage/>} />
                   <Route path="/updateTask/:id" element={<UpdateTaskPage/>} />
                   <Route path="/TaskById/:id" element={<TaskByIdPage/>} />
               </Routes>
           </BrowserRouter>
        </div>
    );
};

export default App;
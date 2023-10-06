import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import './App.css';
import HomePage from './components/HomePage';
import RecipePage from './components/RecipePage';
import AddRecipePage from './components/AddRecipePage';
import UserProfilePage from './components/UserProfilePage';

// placeholders component
// const HomePage = () => <div>Home Page</div>
// const RecipePage = () => <div>Recipe Page</div>
// const AddReciptePage = () => <div>Add Recipe Page</div>
// const UserProfilePage = () => <div>User Profile Page</div>




function App() {
  return (
    <Router>
    <NavigationBar></NavigationBar>

      <h1>Recipe Sharing Platfom</h1>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/recipe/:id" Component={RecipePage}/>
        <Route path="/add-recipe" Component={AddRecipePage}/>
        <Route path="/profile" Component={UserProfilePage}/ >


      </Routes>
    </Router>
  
  );
}

export default App;

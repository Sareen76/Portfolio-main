import express from "express";
import getPersonalInfo from "../controller/personalInfo.js";

const Router = express.Router();


Router.get('/getinfo', getPersonalInfo);

export default Router;
import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAllCompanies, getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router=express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload,updateCompany);
router.route("/all").get(isAuthenticated,getAllCompanies);

export default router;
const express = require("express");
const HandlerCotroller = require('../controller/HandlerController')
const router = express.Router();

const fetchuser = require('../middleware/fetchuser')


router.get('/handledprops',fetchuser,HandlerCotroller.handledproperties)
router.post('/handlerleads',fetchuser,HandlerCotroller.handlerleads)
router.get('/handcontact',fetchuser,HandlerCotroller.handcontact)
router.put("/accepthandler", fetchuser,HandlerCotroller.accepthandler);
router.get("/handreqwithid/:id", fetchuser,HandlerCotroller.handlerwithid );

module.exports = router;

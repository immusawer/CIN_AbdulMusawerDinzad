
// logoutController.js
const SessionController = {
    getSession: async (req, res) => {
        console.log(req?.session?.user, 'userrrr')

        if (Object.keys(req.cookies).length == 0) {
            console.log(req.cookies, 'eeeeeee')
            return res.status(400).json({ success: false, message: 'No active session' });
        }
        else {
            console.log(req.cookies, 'ccccccc')
            return res.status(200).json({ success: true, message: 'session is exist', data: req.cookies });
        }


    }
};

export default SessionController;

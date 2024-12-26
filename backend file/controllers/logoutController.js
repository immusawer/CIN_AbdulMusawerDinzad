// logoutController.js
const LogoutController = {
    logout: async (req, res) => {
        console.log(req.cookies, 'CCC')
        if (!req.cookies) {
            return res.status(400).json({ success: false, message: 'No active session' });
        }

        // req.session.("mngager_access", (err) => {
        //     if (err) {
        //         return res.status(500).json({ success: false, message: 'Failed to log out' });
        //     }
        res.clearCookie('manager_access');
        res.clearCookie('teacher_access');
        console.log(req.cookies)
        return res.status(200).json({ success: true, message: 'Logged out successfully' });
        // });

    }
};

export default LogoutController;

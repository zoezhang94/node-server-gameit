import * as dao from './dao.js';
import Tester from "../testers/model.js";

// let currentUser = null;


function UserRoutes(app) {

    const updateUser = async (req, res) => {
        const id = req.params.id;
        const newUser = req.body;
        const status = await dao.updateUser(id, newUser);
        const currentUser = await dao.findUserById(id);
        req.session["currentUser"] = currentUser;
        res.json(status);
    }

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };

    const findUserById = async (req, res) => {
        const id = req.params.id;
        const user = await dao.findUserById(id);
        res.json(user);
    };

    const findUserByUsername = async (req, res) => {
        const username = req.params.username;
        const user = await dao.findUserByUsername(username);
        res.json(user);
    }

    const findUserByCredentials = async (req, res) => {
        const { username, password } = req.params;
        const user = await dao.findUserByCredentials(username, password);
        res.json(user);
    }

    const findUserByRole = async (req, res) => {
        const { role } = req.params;
        const users = await dao.findUserByRole(role);
        res.json(users);
    }

    const createUser = async (req, res) => {
        const { username, password, email, role } = req.params;
        const user = await dao.createUser({ username, password, email, role });
        res.json(user);
    }

    const updateFirstName = async (req, res) => {
        const { id, newfirstname } = req.params;
        const status = await dao.updateUser(id, { firstName: newfirstname });
        res.json(status);
    }

    const deleteUser = async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteUser(id);
        res.json(status);
    }

    const signIn = async (req, res) => {
        const { username, password } = req.body;
        const user = await dao.findUserByCredentials(username, password);
        if (user) {
            const currentUser = user;
            req.session["currentUser"] = currentUser;
            res.json(user);
        } else {
            res.sendStatus(403);
        }
    }
    const signOut = async (req, res) => {
        // currentUser = null;
        req.session.destroy();
        res.sendStatus(200);
    };


    const signup = async (req, res) => {
        try {
            const { username, password, role } = req.body;

            const existingUser = await dao.findUserByUsername(username);
            if (existingUser) {
                return res.status(400).json({ message: "Username already taken" });
            }

            const newUser = await dao.createUser({ username, password, role });
            req.session["currentUser"] = newUser;

            if (role === 'TESTER') {
                const newTester = new Tester({
                    userAccount: newUser._id
                });
                await newTester.save();
            }

            res.json(newUser);
        } catch (error) {
            console.error('Signup error:', error);
            res.status(500).json({ message: "Error during signup", error });
        }
    };


    const account = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(403);
            return;
        }
        res.json(currentUser);
    };

    const findAllTesters = async (req, res) => {
        try {
            const testers = await dao.findUserByRole('TESTER');
            res.json(testers);
        } catch (error) {
            res.status(500).json({ message: "Error fetching testers", error });
        }
    };

    app.get('/api/users/testers', findAllTesters);
    app.post('/api/users/signin', signIn);
    app.post('/api/users/account', account);
    app.post('/api/users/signup', signup);
    app.post('/api/users/signout', signOut);
    app.delete('/api/users/:id', deleteUser);
    app.get('/api/users/updatefirstname/:id/:newfirstname', updateFirstName);
    app.post("/api/users", createUser);
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:id', findUserById);
    app.get('/api/users/username/:username', findUserByUsername);
    app.get('/api/users/credentials/:username/:password', findUserByCredentials);
    app.get('/api/users/role/:role', findUserByRole);
    app.put('/api/users/:id', updateUser);
}

export default UserRoutes;
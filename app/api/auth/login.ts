import { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '../../utils/db';

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password } = req.body;

    // Open a connection to the SQLite database
    const db = await openDb();

    // Check if the user exists and the password matches
    const user = await db.get('SELECT * FROM users WHERE email = ? AND password = ?', email, password);

    if (user) {
        return res.status(200).json({ message: 'Login successful', user });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
}

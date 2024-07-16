// Example in an API route file, e.g., pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '/utils/db.ts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;

    if (req.method === 'POST') {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (user && user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

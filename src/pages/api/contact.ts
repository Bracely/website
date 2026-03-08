import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Here you would typically handle the form submission, e.g., save to a database or send an email

        // For demonstration, we'll just return a success response
        return res.status(200).json({ status: 'success', message: 'Message received!' });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
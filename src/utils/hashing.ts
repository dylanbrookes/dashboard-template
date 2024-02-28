import bcrypt from 'bcrypt';

export async function hashText(text: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(text, salt);
    return hashed;
}

export async function TextIsHash(text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash);
}

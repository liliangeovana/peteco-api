import { Request, Response } from 'express';
import { getAllNotes } from '~/modules/note';

export const getAllNotesController = async (req: Request, res: Response) => {
  try {
    const user = await getAllNotes();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
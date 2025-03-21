// src/routes/userRoutes.ts
import { Router } from 'express';
import { getAllNotesController } from '~/modules/note';

const router = Router();

router.get('/getNotes', getAllNotesController);

export default router;

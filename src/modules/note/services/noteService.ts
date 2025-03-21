import { type INote } from '~/modules/note';
import { getAllData } from '~/composables/service';

export const getAllNotes = async (): Promise<INote[]> => {
  const notes = await getAllData<INote>('notes');
  return notes;
};
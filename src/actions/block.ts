import * as api from '../api';
import Block from '../entities/Block';

export const FETCH_BLOCKS = 'FETCH_BLOCKS';
export const ADD_BLOCK = 'ADD_BLOCK';
export const EDIT_BLOCK = 'EDIT_BLOCK';
export const DELETE_BLOCK = 'DELETE_BLOCK';


interface FetchBlocksAction {
  type: typeof FETCH_BLOCKS;
  payload: Block[];
}

interface AddBlockAction {
  type: typeof ADD_BLOCK;
  payload: Block;
}

interface EditBlockAction {
  type: typeof EDIT_BLOCK;
  payload: Block;
}

interface DeleteBlockAction {
  type: typeof DELETE_BLOCK;
  payload: number;
}

export type BlockActionTypes = FetchBlocksAction | AddBlockAction | EditBlockAction | DeleteBlockAction;


export async function fetchBlocks(): Promise<BlockActionTypes> {
  return api.getBlocks()
    .then(blocks => ({
      type: FETCH_BLOCKS,
      payload: blocks
    }));
}

export function addBlock(block: Block): BlockActionTypes {
  return {
    type: ADD_BLOCK,
    payload: block
  };
}

export function editBlock(block: Block): BlockActionTypes {
  return {
    type: EDIT_BLOCK,
    payload: block
  };
}

export function deleteBlock(blockId: number): BlockActionTypes {
  return {
    type: DELETE_BLOCK,
    payload: blockId
  };
}
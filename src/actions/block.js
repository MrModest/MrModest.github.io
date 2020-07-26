import * as api from '../api';

export const FETCH_BLOCKS = 'FETCH_BLOCKS';
export const ADD_BLOCK = 'ADD_BLOCK';
export const EDIT_BLOCK = 'EDIT_BLOCK';
export const DELETE_BLOCK = 'DELETE_BLOCK';

export async function fetchBlocks() {
  return api.getBlocks()
    .then(blocks => ({
      type: FETCH_BLOCKS,
      blocks
    }));
}

export function addBlock(block) {
  return {
    type: ADD_BLOCK,
    block
  };
}

export function editBlock(block) {
  return {
    type: EDIT_BLOCK,
    block
  };
}

export function deleteBlock(blockId) {
  return {
    type: DELETE_BLOCK,
    blockId
  };
}
import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useGifs } from './useGifs';

describe('useGifs', () => {
  test('should return default values and methods', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousSearches.length).toBe(0);

    expect(result.current.handlePreviousSearchClicked).toBeDefined();
    expect(result.current.handleSearch).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const quantityOfGifsExpected = 10;

    const { result } = renderHook(() => useGifs());

    await act(async () => await result.current.handleSearch('Dofus'));

    expect(result.current.gifs.length).toBe(quantityOfGifsExpected);
  });

  test('should return a list of gifs when handlePreviousSearchClicked is called', async () => {
    const quantityOfGifsExpected = 10;

    const { result } = renderHook(() => useGifs());

    await act(async () => await result.current.handlePreviousSearchClicked('dofus'));

    expect(result.current.gifs.length).toBe(quantityOfGifsExpected);
  });
});

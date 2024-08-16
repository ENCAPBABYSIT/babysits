import { useState } from 'react';
import { getSitters } from 'services/sittersService';
import { Sitter } from 'types/sitter';

export const useSitters = () => {
    const [sitters, setSitters] = useState<Sitter[]>(getSitters());

    return { sitters, setSitters };
};
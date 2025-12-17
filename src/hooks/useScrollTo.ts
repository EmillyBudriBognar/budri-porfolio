import { useCallback } from 'react';

/**
 * Hook customizado para rolar suavemente até um elemento pelo ID.
 * @returns Função scrollTo que aceita o ID da seção.
 */
export const useScrollTo = () => {
    const scrollTo = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return scrollTo;
};

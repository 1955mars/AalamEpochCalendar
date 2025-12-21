
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FieldType = 'All' | 'Science' | 'Art' | 'Geopolitics';

interface NavigationState {
    searchQuery: string;
    activeField: FieldType;
    zoomLevel: number; // 0 (Condensed/Zoom Out) to 1 (Standard/Details)
    setSearchQuery: (query: string) => void;
    setActiveField: (field: FieldType) => void;
    setZoomLevel: (level: number) => void;
}

const NavigationContext = createContext<NavigationState | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeField, setActiveField] = useState<FieldType>('All');
    const [zoomLevel, setZoomLevel] = useState(1);

    return (
        <NavigationContext.Provider value={{
            searchQuery,
            activeField,
            zoomLevel,
            setSearchQuery,
            setActiveField,
            setZoomLevel
        }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};

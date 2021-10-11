type PageType = { 
    head: JSX.Element; 
    page: JSX.Element; 
}

export function pageStructure({ head, page }: PageType): JSX.Element {
    return (
        <div key="App" className="App">
            {head}
            {page}
        </div>
    );
}

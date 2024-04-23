import { useState } from 'react';
import { Paginator } from 'primereact/paginator';

const MyComponent = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div>
            <Paginator
                first={first}
                rows={rows}
                totalRecords={120}
                rowsPerPageOptions={[10, 20, 30]}
                onPageChange={onPageChange}
            />
            {/* Your data rendering logic here */}
        </div>
    );
};

export default MyComponent;

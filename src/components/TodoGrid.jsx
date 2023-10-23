
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from 'dayjs';

import PropTypes from 'prop-types';

export default function TodoGrid(props) {
    const gridRef = useRef();

    const columns = [
        { field: "description", sortable: true, filter: true, floatingFilter: true },
        { field: 'date', sortable: true, filter: true, floatingFilter: true, headerName: 'Date', valueFormatter: params => dayjs(params.value).format("DD.MM.YYYY")},
        {
            field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ];


    TodoGrid.propTypes = {
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
    };

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            const removeIndex = gridRef.current.getSelectedNodes()[0].data.id;
            console.log('Removing todo with ID:', removeIndex);
            props.deleteTodo(removeIndex);
        } else {
            alert('Select a row first!');
        }
    }



    return (
        <>
            <div className="ag-theme-material" style={{ height: '700px', width: '70%', margin: 'auto' }}>
                <Button 
                variant="outlined" 
                onClick={deleteTodo} 
                startIcon={<DeleteIcon />}
                style={{ borderColor: 'red', color: 'red'  }}
                >
                    Delete
                </Button>
                <AgGridReact
                    rowData={props.todos}
                    columnDefs={columns}
                    rowSelection="single"
                    ref={gridRef}
                    animateRows={true}
                    onGridReady={params => gridRef.current = params.api}
                >
                </AgGridReact>
            </div>
        </>
    )
}

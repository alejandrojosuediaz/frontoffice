import { DataGrid } from '@mui/x-data-grid';
import { esES } from '@mui/x-data-grid/locales';
import { IconSearch } from './icons/Icons';

interface Props {
  columns: any[]
  rows: any[]
  loading: boolean,
}
export default function DataTable({ columns, rows, loading }: Props) {
  const ACTION_COLUMNS = [
    {
    field: "action",
    headerName: "",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    width: 56,
    renderCell: (params: any) => {
      return (
        <a
          className=" w-100 h-100 d-inline-flex align-items-center justify-content-center text-dark"
          href={`/companies/${params.row.documentId}`}
          aria-label="Ver registro"
          title="Ver"
        >
          <IconSearch />
        </a>
      )
    },
  }]
  return (
    <section className="py-2">
      {/* <div className="row">
        <form className="col-md-6 gap-2 my-2 d-flex align-items-center">
          <label className="fw-bold">RTN:</label>
          <input type="text" className="form-control" id="inputPassword2" placeholder="XXXXXXXXXXXXXX" />
          <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
      </div> */}
      <DataGrid
        rows={rows}
        columns={ACTION_COLUMNS.concat(columns)}
        getRowId={(row) => row.__rowId ?? row.documentId ?? row.id}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[5, 20, 50, 100]}
        disableRowSelectionOnClick
        style={{
          height: '80vh'
        }}
      />
    </section>
  );
}

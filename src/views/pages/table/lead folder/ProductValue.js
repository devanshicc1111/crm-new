import React, { useMemo, useState } from 'react'

import { Paper, Grid, DialogActions, Button, MaterialReactTable } from '@mui/material'
// import MilestoneDetail from './MilestoneDetail'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
// import { MaterialReactTable } from 'material-react-table'

const ProductValue = props => {
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [pageSizes] = useState([5, 10, 15])

  const columns = useMemo(() => [
    {
      accessorKey: 'account',
      header: 'SERVICE',
      size: 100,
      Cell: ({ cell }) => <span className='text-m text-b'>{cell.getValue()}</span>
    },
    {
      accessorKey: 'leadTitle',
      header: 'MILESTONE',
      size: 100,
      Cell: ({ cell }) => <span className='text-m text-b'>{cell.getValue()}</span>
    },
    {
      accessorKey: 'description',
      header: 'PAYABLE AMMOUNT',
      size: 100,
      Cell: ({ cell }) => <span className='text-m text-b'>{cell.getValue()}</span>
    }
  ])

  const CustomToolbarMarkup = ({ table }) => {
    const selectid = table.getSelectedRowModel().flatRows.map(row => row.original)
    return (
      <>
        <Grid container className='AcHeader'>
          <Grid item xs={12} className='PaHeadTop'>
            <MRT_ShowHideColumnsButton table={table} />
          </Grid>
        </Grid>
      </>
    )
  }
  const handleSubmit = () => {
    closeDialog()
  }
  return (
    <>
      <Paper
        elevation={3}
        style={{
          position: 'relative',
          borderRadius: '9px',
          width: '95%',
          marginLeft: '20px',
          marginTop: '10px',
          marginBottom: '10px'
        }}
      >
        <div>
          <MaterialReactTable
            columns={columns}
            displayColumnDefOptions={{
              'mrt-row-select': {
                size: 5,
                muiTableHeadCellProps: {
                  sx: {
                    paddingLeft: '25px'
                  }
                },
                muiTableBodyCellProps: {
                  sx: {
                    paddingLeft: '25px'
                  }
                }
              }
            }}
            enableBottomToolbar={false}
            enableColumnResizing
            enableStickyHeader
            enableRowSelection
            enableFilters={false}
            enableFullScreenToggle={false}
            enableDensityToggle={false}
            renderTopToolbar={({ table }) => <CustomToolbarMarkup table={table} />}
            muiTableContainerProps={() => ({
              sx: {
                border: '1px solid #8080802b',
                height: '30vh'
              }
            })}
            muiTablePaperProps={() => ({
              sx: {
                padding: '0rem 1rem',
                border: '0',
                boxShadow: 'none'
              }
            })}
          />
          {/* <PaginationComp
            pageSize={pageSize}
            pageSizes={pageSizes}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalCount={totalCount}
            setPageSize={setPageSize}
          /> */}
          <DialogActions>
            <Button
              endIcon={<CloseIcon />}
              onClick={() => formik.handleReset()}
              type='reset'
              variant='contained'
              color='primary'
              disableElevation
            >
              RESET
            </Button>
            <Button endIcon={<DoneIcon />} type='submit' variant='contained' color='primary' disableElevation>
              SUBMIT
            </Button>
          </DialogActions>
        </div>
      </Paper>
    </>
  )
}

export default ProductValue

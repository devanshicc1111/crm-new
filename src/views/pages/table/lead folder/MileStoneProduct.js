import React, { useMemo, useEffect, useState } from 'react'
import { MRT_ShowHideColumnsButton, MaterialReactTable } from 'material-react-table'
import PaginationComp from 'app/views/utilities/PaginationComp'
import { useDispatch, useSelector } from 'react-redux'
import { Paper, Grid } from '@mui/material'
import { Fab, Tooltip, IconButton, Slide } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Typography } from '@material-ui/core'
import Dialog from '@mui/material/Dialog'
import Draggable from 'react-draggable'
import CreateMileStone from './CreateMileStone'
import MilestoneDetail from './MilestoneDetail'
import { getMilestone } from 'app/redux/actions/leadAction.js/leadAcrtion'

function PaperComponent(props) {
  return (
    <Draggable handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

function ProductMilestone(props) {
  const { leadId } = props
  const dispatch = useDispatch()
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [pageSizes] = useState([5, 10, 15])
  const [openProductMile, setOpenProductMile] = useState(false)
  const [openMilestone, setOpenMilestone] = useState(false)

  const lead = useSelector(state => state.mileStone.leadData)
  const mileStone = useSelector(state => state.milestone)

  useEffect(() => {
    dispatch(getMilestone(leadId))
  }, [leadId])

  console.log('newwwwwwwwww', mileStone)

  const mileStoneData = lead.map(item => ({
    milestone: item.milestoneNumber,
    payableammount: item.totalCost?.toString(),
    expecteddate: item.paymentDate
  }))

  // Milestone open and close

  const handleOpenMilestone = () => {
    setOpenMilestone(true)
  }
  const handleCloseMilestone = () => {
    setOpenMilestone(false)
  }

  const handleOpenPmile = () => {
    setOpenProductMile(true)
  }

  const handleClosePmile = () => {
    setOpenProductMile(false)
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'milestone',
        header: 'MILESTONE',
        size: 100,
        Cell: ({ cell }) => <span className='text-m text-b'>{cell.getValue()}</span>
      },
      {
        accessorKey: 'payableammount',
        header: 'PAYMENT AMMOUNT',
        size: 100,
        Cell: ({ cell }) => <span className='text-m text-b'>{cell.getValue()}</span>
      },
      {
        accessorKey: 'expecteddate',
        header: 'EXPECTED DATE',
        size: 100,
        Cell: ({ cell }) => <span className='text-m text-b'>{cell.getValue()}</span>
      }
    ],
    [mileStoneData]
  )

  const CustomToolbarMarkup = ({ table }) => {
    const selectid = table.getSelectedRowModel().flatRows.map(row => row.original)
    return (
      <>
        <Grid container className='AcHeader'>
          <Grid item xs={12} className='PaHeadTop'>
            <div
              style={{
                width: '85%',
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <MRT_ShowHideColumnsButton table={table} />

              <div className='PaIconCon'>
                <Tooltip title='CREATE MILESTONE'>
                  <span>
                    <Fab
                      onClick={handleOpenPmile}
                      style={{
                        width: '2.2rem',
                        height: '1rem',
                        backgroundColor: 'rgb(230, 81, 71)'
                      }}
                    >
                      <AddIcon style={{ fontSize: '19', color: '#fff' }} />
                    </Fab>
                  </span>
                </Tooltip>
              </div>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <>
      <Paper square elevation={2}>
        <div>
          <MaterialReactTable
            data={mileStoneData}
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
            muiTableBodyRowProps={({ row }) => ({
              onClick: () => {
                handleOpenMilestone(row?.original)
              }
            })}
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
                // width: "80vh"
              }
            })}
          />
          <PaginationComp
            pageSize={pageSize}
            pageSizes={pageSizes}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalCount={totalCount}
            setPageSize={setPageSize}
          />
        </div>
      </Paper>
      {/* Dialog */}
      <Dialog
        onClose={handleClosePmile}
        open={openProductMile}
        aria-labelledby='draggable-dialog-title'
        PaperComponent={PaperComponent}
      >
        {console.log('Milestone id', leadId)}
        <CreateMileStone leadId={leadId} handleClosePmile={handleClosePmile}></CreateMileStone>
      </Dialog>

      <Dialog open={openMilestone} onClose={handleCloseMilestone}>
        <MilestoneDetail handleCloseMilestone={handleCloseMilestone}></MilestoneDetail>
      </Dialog>
    </>
  )
}

export default ProductMilestone

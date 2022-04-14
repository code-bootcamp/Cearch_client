import * as CH from './search.styles'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar(props) {
  return (
    <>
      <CH.SearchBar isTop={props.isTop}>
        <input type="text" onChange={props.onChangeSearch} />
        <button onClick={props.onClickSearch}>
          <div className="search icon"></div>
        </button>
      </CH.SearchBar>

      <Button onClick={props.handleOpen} className="ModalButton">
        {props.isTop ? (
          <SearchIcon fontSize="medium" sx={{ color: '#FFA24B' }} />
        ) : (
          <SearchIcon fontSize="medium" sx={{ color: 'white' }} />
        )}
      </Button>
      <Modal
        open={props.modalOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CH.ModalStyle>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ pl: 1 }}
          >
            Search
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="ModalInputWrapper"
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="InputTag"
            />
            <button type="button" className="SearchInModal">
              <SearchIcon sx={{ fontSize: 35 }} />
            </button>
          </Typography>
        </CH.ModalStyle>
      </Modal>
    </>
  )
}

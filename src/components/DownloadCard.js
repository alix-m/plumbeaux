import React from "react"
import Card from 'react-bootstrap/Card'

const DownloadCard = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title><h3>{ props.item.title}</h3></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Updated { props.item.update }</Card.Subtitle>
        <Card.Text>
            { props.item.text }
        </Card.Text>
        <Card.Link href={ props.item.info_url }>More Info</Card.Link>
        <Card.Link href={ props.item.download_url }>Download</Card.Link>
      </Card.Body>
    </Card>
  )
}
export default DownloadCard
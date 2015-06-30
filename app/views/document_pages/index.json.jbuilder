json.array!(@document_pages) do |document_page|
  json.extract! document_page, :id, :document_id, :image
  json.url document_page_url(document_page, format: :json)
end

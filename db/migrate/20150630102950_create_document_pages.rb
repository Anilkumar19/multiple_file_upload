class CreateDocumentPages < ActiveRecord::Migration
  def change
    create_table :document_pages do |t|
      t.string :document_id
      t.string :image

      t.timestamps
    end
  end
end

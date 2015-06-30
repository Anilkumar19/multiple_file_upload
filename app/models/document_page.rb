class DocumentPage < ActiveRecord::Base
	 mount_uploader :image, ImageUploader
   belongs_to :document
end

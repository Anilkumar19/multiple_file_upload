class Document < ActiveRecord::Base
	 has_many :document_pages
   accepts_nested_attributes_for :document_pages
end

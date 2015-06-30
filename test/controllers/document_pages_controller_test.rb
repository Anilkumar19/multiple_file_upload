require 'test_helper'

class DocumentPagesControllerTest < ActionController::TestCase
  setup do
    @document_page = document_pages(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:document_pages)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create document_page" do
    assert_difference('DocumentPage.count') do
      post :create, document_page: { document_id: @document_page.document_id, image: @document_page.image }
    end

    assert_redirected_to document_page_path(assigns(:document_page))
  end

  test "should show document_page" do
    get :show, id: @document_page
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @document_page
    assert_response :success
  end

  test "should update document_page" do
    patch :update, id: @document_page, document_page: { document_id: @document_page.document_id, image: @document_page.image }
    assert_redirected_to document_page_path(assigns(:document_page))
  end

  test "should destroy document_page" do
    assert_difference('DocumentPage.count', -1) do
      delete :destroy, id: @document_page
    end

    assert_redirected_to document_pages_path
  end
end

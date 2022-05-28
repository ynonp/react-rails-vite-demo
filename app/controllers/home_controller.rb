class HomeController < ApplicationController
  def index
    @page = { page: 'Home Page' }
    respond_with(@page)
  end
end

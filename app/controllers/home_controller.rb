class HomeController < ApplicationController
  def index
    @page = 'Home Page'
    respond_with(page: @page)
  end
end

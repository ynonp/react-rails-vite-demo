class AboutController < ApplicationController
  def index
    @page = 'About Page'
    respond_with(page: @page)
  end
end

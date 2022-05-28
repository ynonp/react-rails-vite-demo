class AboutController < ApplicationController
  def index
    @page = { page: 'About Page' }
    respond_with(@page)
  end
end

class Api::V1::BugsController < ApplicationController
  before_action :find_bug, only: [:show, :update, :destroy]

  def index
    @bugs = Bug.all

    render json: @bugs
  end

  def show
    render json: @bug
  end

  def create 
    @bug = Bug.new(bug_params)
    if @bug.save
      # flash[:notice] = "Bug was created successfully"
      render json: @bug, status: :created, location: api_v1_bugs_path(@bug)
    else
      render json: @bug.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bugs/1
  def update
    if @bug.update(bug_params)
      # flash[:notice] = "Bug was updated successfully"
      render json: @bug
    else
      render json: @bug.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bug/1
  def destroy
    @bug.destroy
    # flash[:notice] = "Bug was deleted successfully"
  end
  
  private
  def find_bug
    @bug = Bug.find(params[:id])
  end

  def bug_params
    params.require(:bug).permit(:title, :description, :bug_type, :feature_status, :bug_status, :deadline, :project_id,)
  end

end
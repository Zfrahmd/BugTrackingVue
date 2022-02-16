class Api::V1::ProjectsController < ApplicationController
  before_action :find_project, only: [:show, :update, :destroy]

  def index
    @projects = Project.all

    render json: @projects
  end

  def show
    render json: @project
  end

  def create 
    @project = Project.new(project_params)
    if @project.save
      # flash[:notice] = "Bug was created successfully"
      render json: @project, status: :created, location: api_v1_projects_path(@project)
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      # flash[:notice] = "Bug was updated successfully"
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /project/1
  def destroy
    @project.destroy
    # flash[:notice] = "Bug was deleted successfully"
  end
  
  private
  def find_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:project_name, :description)
  end
end

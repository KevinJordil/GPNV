<div class="col-xs-12 col-lg-6">
  <div class="panel panel-default">
    <!-- Display all project informations like the members, a description and so on -->
    <div class="panel-heading showPanel" data-toggle="collapse" data-target="#objectives">
      <h1 >Objectifs <span class="glyphicon glyphicon-chevron-down pull-right"></span></h1>
    </div>
    <div id="objectives" class="panel-body objectives collapse" data-projectid="{{$project->id}}">
      <div class="progressionCheckList">
        <div class="barre" style="background: linear-gradient(90deg, #20DE13 {{$objectifs->getCompletedPercent()}}%, #efefef 0%);"></div>
        <p>{{$objectifs->getNbItemsDone()}}/{{$objectifs->getNbItems()}}</p>
      </div>
      <div>
          <!-- Display all yourCheckList -->
          @if($objectifs->showToDo())
            @foreach($objectifs->showToDo() as $checkListItem)
              @include('checkList.show', array('checkListItem'=>$checkListItem, 'modalBox' => true, 'projectId'=>$project->id))
            @endforeach
          @endif
      </div>
      <div class="completed hidden">
        @if($objectifs->showCompleted())
          @foreach($objectifs->showCompleted() as $checkListItem)
            @include('checkList.show', array('checkListItem'=>$checkListItem, 'modalBox' => true, 'projectId'=>$project->id))
          @endforeach
        @endif
      </div>
      @if(Auth::user()->projects()->find($project->id))
        <a class="btn btn-warning addCheckList" data-id="{{$objectifs->getId()}}" data-projectid="{{$project->id}}" data-URL="{{ URL('project') }}">Ajouter</a>
      @endif
      @if($objectifs->getNbItemsDone())
        <a class="btn btn-warning changeView">Voir les objectifs validés</a>
        <a class="btn btn-warning changeView hidden">Cacher les objectifs validés</a>
      @endif
    </div>
  </div>
</div>

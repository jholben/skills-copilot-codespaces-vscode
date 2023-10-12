function skillsMember () {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/client/views/member-skills.client.view.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    scope: {
      skills: '=',
      canEdit: '='
    },
    bindToController: true
  };
}

   

